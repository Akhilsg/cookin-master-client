import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as recipeActionTypes from "../../recipeActionTypes";
import { deleteRecipe } from "../../recipeAction";
import { FaTrash, FaEdit } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { likeRecipe, unlikeRecipe } from "../../recipeAction";
import {
  Main,
  Description,
  Middle,
  ImgContainer,
  Image,
  Modification,
  Button,
  RecipeName,
  Category,
  BottomDesc,
  FavoriteBtn,
  DeleteModalContainer,
  DeleteModal,
  DeleteBtn,
  DeleteRow,
  StyledContainer,
  DetailsContainer
} from "./StyledRecipe";

const Recipe = ({ currentRecipe, JWToken, userId, loggedIn }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  let dispatch = useDispatch();
  let history = useHistory();
  const {
    _id,
    recipeName,
    recipeDesc,
    servings,
    duration,
    ingredients,
    directions,
    img,
    createdOn,
    creator,
    ownerId,
    likes,
  } = currentRecipe;

  let capCreator = "";
  if (!creator) {
    return "";
  } else {
    capCreator = creator.charAt(0).toUpperCase() + creator.slice(1);
  }
  let duration_hour = Math.floor(duration / 60);
  let duration_mins = duration % 60;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = new Date(createdOn);
  let createdMonth = months[month.getMonth()];
  let createdYear = new Date(createdOn).getFullYear();

  return (
    <Main loggedIn={loggedIn}>
      <StyledContainer>
        <ImgContainer>
          <Image
            alt={recipeName}
            src={img}
            style={{ position: "relative" }}
          />
        </ImgContainer>
        <DetailsContainer>
          <Description>
            <RecipeName>
              {recipeName}
              {likes.indexOf(userId) === -1 ? (
                <FavoriteBtn
                  onClick={() => dispatch(likeRecipe(_id, JWToken))}
                >
                  <FaRegHeart size={30} />
                </FavoriteBtn>
              ) : (
                <FavoriteBtn
                  onClick={() => dispatch(unlikeRecipe(_id, JWToken))}
                >
                  <FaHeart
                    style={{
                      color: "#FB170A",
                    }}
                    size={30}
                  />
                </FavoriteBtn>
              )}
              <br />
              <span
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  fontWeight: "200"
                }}
              >
                {recipeDesc}
              </span>
            </RecipeName>
            <BottomDesc>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontSize: "18px" }}><strong>Serves:</strong> {servings}</span>

                <span style={{ fontSize: "18px" }}>
                  <strong>Cook Time:</strong> {duration_hour}hr {duration_mins}mins
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <p>
                  {createdMonth} {createdYear}
                </p>
                <span style={{ fontSize: "18px", marginBottom: "1rem" }}>
                  <strong>Created By:</strong> {capCreator}
                </span>
              </div>
              {ownerId === userId && (
                <Modification>
                  <Button
                    onClick={() => {
                      dispatch({
                        type: recipeActionTypes.EDIT_STATE,
                        payload: true,
                      });
                    }}
                  >
                    <FaEdit size={22} />
                  </Button>
                  <Button
                    onClick={() => {
                      setDeleteModal(true);
                    }}
                  >
                    <FaTrash size={20} />
                  </Button>

                  {deleteModal && (
                    <DeleteModalContainer
                      onClick={() => {
                        setDeleteModal(false);
                      }}
                    >
                      <DeleteModal>
                        <h3 style={{ fontWeight: "400" }}>
                          {" "}
                          Are you sure about deleting <strong>{recipeName}</strong>?{" "}
                          <p style={{ fontSize: "16px", fontWeight: "200" }}>
                            This action cannot be undone
                          </p>
                        </h3>
                        <DeleteRow>
                          <DeleteBtn
                            onClick={() => {
                              setDeleteModal(false);
                            }}
                          >
                            Cancel
                          </DeleteBtn>
                          <DeleteBtn
                            onClick={() => {
                              dispatch(
                                deleteRecipe(
                                  _id,
                                  JWToken,
                                  history
                                )
                              );
                            }}
                            style={{ background: "red" }}
                          >
                            Delete
                          </DeleteBtn>
                        </DeleteRow>
                      </DeleteModal>
                    </DeleteModalContainer>
                  )}
                </Modification>
              )}
            </BottomDesc>
          </Description>
          <Middle>
            <Category>Ingredients</Category>
            {ingredients.length ? (
              ingredients.map((ingredient, index) => (
                <p key={index}>
                  {ingredient.amount}&nbsp;
                  {ingredient.unit && ingredient.unit.value} of&nbsp;
                  {ingredient.ingName}
                </p>
              ))) : (
              <p>There are no ingredients</p>
            )}
          </Middle>
          <Middle>
            <Category>Directions</Category>
            {directions &&
              directions.map((step, index) => (
                <p key={index}><strong>{index + 1}.</strong> {step}</p>
              ))}
          </Middle>
        </DetailsContainer>
      </StyledContainer>
    </Main>
  );
};

export default Recipe;
