import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  exploreRecipes,
  getCurrentRecipe,
  likeRecipe,
  unlikeRecipe,
} from "../recipes/recipeAction";
import styled from "styled-components";
import { device } from "../Theme";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Main } from "../main/components/StyledMain";
import { ProgressLabel } from "../recipes/components/StyledForm";
import { FavoriteBtn } from "../recipes/components/recipe/StyledRecipe";

const CardBox = styled.div`
  background: #f8f8f8;
  margin: ${({ recipes }) => recipes.length === 1 ? "1rem auto" : "1rem auto"};
  width: 20rem;
  height: 25rem;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  border-radius: 1rem;
  box-shadow: 5px 5px 5px 0px rgba(230, 230, 230, 1);
  /* justify-content: flex-start; */
  align-content: flex-start;
  @media ${device.laptop}, ${device.wide} {
    width: 19rem;
    height: 22rem;
  }
`;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 55%;
  border-radius: 1rem 1rem 0 0;
  background: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
`;

const DescriptionBox = styled.div`
  padding: 0 1rem;
  width: 100%;
  height: 35%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: left;
  align-content: flex-start;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSizes.small};
  text-align: center;
  @media ${device.laptop}, ${device.wide} {
    /* height: 45%; */
  }
`;
const RecipeName = styled.h1`
  width: 100%;
  margin: 0%;
  font-weight: 800;
  font-size: ${(props) => props.theme.fontSizes.large};
  display: flex;
  justify-content: center;
`;

const Description = styled.p`
  margin: 0.5rem 0 1rem 0;
`;

const StyledLink = styled.button`
  color: #ffffff;
  width: 5rem;
  line-height: 2rem;
  background: black;
  padding: 3px;
  text-align: center;
  margin: 0 auto;
  border: none;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.73);
  text-decoration: none;
  cursor: pointer;
  border-radius: 6px;
  font-size: ${(props) => props.theme.fontSizes.small};
  &:hover {
    background: #1D1D1D;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.56);
  }
  & > label {
    cursor: pointer;
    text-transform: uppercase;
  }
`;

const Explore = ({ JWToken, userId, recipes, loggedIn }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(exploreRecipes());

    //eslint-disable-next-line
  }, [dispatch]);
  let history = useHistory();
  let card = recipes.map((recipe) => {
    const { img, recipeName, recipeDesc, likes, _id } = recipe;
    return (
      <CardBox recipes={recipes} key={_id}>
        <Image src={img} recipes={recipes} />

        <DescriptionBox>
          <RecipeName>
            {" "}
            {likes.indexOf(userId) === -1 ? (
              <FavoriteBtn
                onClick={() =>
                  dispatch(likeRecipe(_id, JWToken))
                }
              >
                <FaRegHeart size={30} />
              </FavoriteBtn>
            ) : (
              <FavoriteBtn
                onClick={() =>
                  dispatch(unlikeRecipe(_id, JWToken))
                }
              >
                <FaHeart
                  style={{
                    color: "#FB170A",
                  }}
                  size={30}
                />
              </FavoriteBtn>
            )}
            {recipeName}
          </RecipeName>
          <Description>
            {recipeDesc.length > 40
              ? `${recipeDesc.substr(0, 40)}...`
              : recipeDesc}
          </Description>
          <StyledLink
            onClick={() => {
              dispatch(
                getCurrentRecipe(recipe._id, JWToken, history)
              );
            }}
          >
            <label>Recipe</label>
          </StyledLink>
        </DescriptionBox>
      </CardBox>
    );
  });
  return (
    <Main loggedIn={loggedIn}>
      <div style={{ width: "100%" }}>
        <ProgressLabel>Explore</ProgressLabel>
      </div>
      {card}
    </Main>
  );
};
const mapStateToProps = (state) => ({
  userId: state["authReducer"].id,
  JWToken: state["authReducer"].JWToken,
  recipes: state["recipeReducer"].recipes,
});

export default connect(mapStateToProps)(Explore);
