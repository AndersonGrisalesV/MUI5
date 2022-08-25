import {
  Tooltip,
  Fab,
  Modal,
  Box,
  Typography,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import React, { useState } from "react";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="grey" textAlign="center">
            CreatePost
          </Typography>
          <UserBox>
            <Avatar
              alt="Bambi"
              src="data:image/jpeg;base64,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"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="span" fontWeight={500} textAlign="center">
              Jhon Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
