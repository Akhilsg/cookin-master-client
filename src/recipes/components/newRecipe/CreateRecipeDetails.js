import React, { useRef, useState, useCallback } from "react";
import { connect, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { setDraftRecipe, uploadImage } from "../../recipeAction";
import {
  StyledForm,
  Submit,
  TextInput,
  TextArea,
  HourMinute,
  ImageUpload,
  ProgressLabel,
  ErrorMessage
} from "../StyledForm";
import { useDropzone } from "react-dropzone";

const blankImage = 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png';

const CreateRecipeDetails = ({ JWToken }) => {
  const { register, handleSubmit, errors } = useForm();
  const [file, setFile] = useState({});
  const [dropped, setDropped] = useState(false);

  const onDrop = useCallback((acceptedFiles, e) => {
    setFile(acceptedFiles);
    setDropped(true);
  }, []);

  const handleBlur = (e) => {
    if (e.currentTarget.value === '0') e.currentTarget.value = '0'
  }

  const handleKeypress = (e) => {
    const characterCode = e.key
    if (characterCode === 'Backspace') return

    const characterNumber = Number(characterCode)
    if (characterNumber >= 0 && characterNumber <= 9) {
      if (e.currentTarget.value && e.currentTarget.value.length) {
        return
      }
    } else {
      e.preventDefault()
    }
  }

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const filepath = acceptedFiles.map((file) => {
    Object.assign(file, {
      preview: URL.createObjectURL(file),
    });

    return (
      <li key={file.path} style={{ listStyle: "none" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
          }}
        >
          <img
            src={file.preview}
            style={{
              width: "75px",
              height: "75px",
              objectFit: "contain",
            }}
            alt={file.name}
          />
          <p>{file.path}</p>
        </div>
      </li>
    );
  });

  const recipeNameRef = useRef();
  const recipeDescRef = useRef();
  const servingsRef = useRef();
  const hourRef = useRef();
  const minutesRef = useRef();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    if (!dropped) {
      const updatedData = { ...data, img: blankImage };
      dispatch(setDraftRecipe(updatedData));
    } else {
      dispatch(uploadImage(file, JWToken))
        .then((url) => {
          const updatedData = { ...data, img: url };
          dispatch(setDraftRecipe(updatedData));
        })
        .catch((err) => {
          return err;
        });
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <ProgressLabel>Details</ProgressLabel>
      <label>
        Name *
        <TextInput
          type="text"
          name="recipeName"
          placeholder="Recipe Name"
          ref={(e) => {
            register(e, {
              required: "*Name is required",
            });
            recipeNameRef.current = e;
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              recipeDescRef.current.focus();
            }
          }}
        />
      </label>
      {errors["recipeName"] && (
        <ErrorMessage>{errors["recipeName"].message}</ErrorMessage>
      )}
      <label>
        Description
        <TextArea
          type="text"
          name="recipeDesc"
          placeholder="Description"
          ref={(e) => {
            register(e);
            recipeDescRef.current = e;
          }}
          style={{ height: "8rem" }}
        // cannot keypress cause it's textarea
        />
      </label>
      <label>
        Servings *
        <TextInput
          type="text"
          name="servings"
          placeholder="Servings (How many people does this meal serve?)"
          ref={(e) => {
            register(e, {
              required: "*Servings is required",
              pattern: {
                value: /^[0-9]*$/,
                message: "*Must be a number",
              },
            });
            servingsRef.current = e;
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              hourRef.current.focus();
            }
          }}
        />
      </label>
      {errors["servings"] && (
        <ErrorMessage>{errors["servings"].message}</ErrorMessage>
      )}

      <HourMinute>
        <label>
          Hour
          <TextInput
            type="number"
            name="duration_hour"
            placeholder="Hours (Duration)"
            ref={(e) => {
              register(e);
              hourRef.current = e;
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                minutesRef.current.focus();
              }
            }}
            onBlur={handleBlur}
            onKeyDown={handleKeypress}
            min="0"
          />
        </label>

        <label>
          Minutes
          <TextInput
            type="number"
            name="duration_mins"
            placeholder="Mins (Duration)"
            ref={(e) => {
              register(e);
              minutesRef.current = e;
            }}
            onBlur={handleBlur}
            onKeyDown={handleKeypress}
            min="0"
          />
        </label>
      </HourMinute>
      <div>
        <ImageUpload {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drop or click to upload image</p>
          <div>{filepath}</div>
        </ImageUpload>
      </div>

      <div>
        <Submit type="submit" value="Submit" name="Submit">
          {" "}
          Next
        </Submit>
      </div>
    </StyledForm>
  );
};

const mapStateToProps = (state) => ({
  JWToken: state["authReducer"].JWToken,
});
export default connect(mapStateToProps)(CreateRecipeDetails);
