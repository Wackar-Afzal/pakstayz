"use client";

import { useState } from "react";
import {
  Avatar,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Slide,
} from "@mui/material";
import { CircleX } from "lucide-react";

// Sample team data
const teamMembers = [
  {
    id: 1,
    name: "Sidra ",
    special:"Hairdresser",
    special2:"",
    exp: "10 years",
    image:
      "sidra.jpg",
    intro:"Meet Sidra – Your Beauty Expert with 9 Years of Experience With nearly a decade of hands-on experience in the beauty industry, I specialize in hair styling, hair coloring, treatments, precision haircuts, and flawless blow-drys. I’m also skilled in waxing, threading, nail care, and lash enhancements. Passionate about helping clients look and feel their best, I bring expertise, creativity, and care to every service.",
  },
  {
    id: 2,
    name: "Saima",
    special:"All Rounder Beautician",
    special2:"",
    exp: "15 years",
    image:
      "saima.jpg",
    intro:"Hi, I’m Saima – a professional beautician with 15 years of experience in the beauty industry. I specialize in hair care, nail care, facial treatments, and BB Glow, offering a full range of services to help you look and feel your best. With a passion for beauty and personalized care, I’m here to give you the confidence you deserve.",
  },
  {
    id: 3,
    name: "Sana",
    special:"Hairstylist, ",
    special2:"Morroccan Bath professionalist",
    exp: "5 years",
    image:
      "sana.jpg",
    intro:
      "Hi, I’m Sana – a skilled beauty professional with 5 years of experience, specializing in Moroccan bath, blow-dry styling, waxing, eyebrow tinting, and nail care. I’m passionate about creating a relaxing and refreshing experience for every client, using expert techniques to help you feel clean, confident, and beautifully.",
  },
];

export default function TeamProfiles() {
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleOpen = (member) => {
    setSelectedMember(member);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="py-6 md:py-12 px-2  md:px-[15%]">
      <h2 className="text-3xl font-bold text-center mb-10">Our Team</h2>

      <div className="flex gap-[1rem] flex-wrap justify-center items-start">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center w-full  lg:w-[30%]"
            onClick={() => handleOpen(member)}
          >
            <Avatar
              src={member.image}
              alt={member.name}
              className="w-40 h-40 cursor-pointer transition-transform hover:scale-105 mb-4"
              sx={{ width: 160, height: 160 }}
            />
            {/* <Typography className="text-gray-600 text-center">  {member.exp}</Typography> */}

            <Typography variant="h5">
              {member.name}
            </Typography>
            <Typography variant="span" className="text-gray-600 text-center">{member.special}</Typography>
            <Typography variant="span" className="text-gray-600 text-center">{member.special2}</Typography>
          </div>
        ))}
      </div>

      {/* Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Slide}
        TransitionProps={{ direction: "up" }}
        maxWidth="sm"
        fullWidth
      >
        {selectedMember && (
          <>
            <DialogTitle className="flex justify-between items-center">
            <Typography className="text-gray-600 text-center">  {selectedMember.exp}- {selectedMember.special} {selectedMember.special2}</Typography>

              <IconButton aria-label="close" onClick={handleClose}>
                <CircleX />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <div className="flex flex-col items-center mb-4">
                <Avatar
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-40 h-40 mb-4"
                  sx={{ width: 160, height: 160 }}
                />
                <Typography variant="h5" className="font-bold">
                  {selectedMember.name}
                </Typography>
                <Typography variant="subtitle1" className="text-gray-600 mb-4">
                  {selectedMember.location}
                </Typography>
                <Typography variant="body1" className="text-center mb-6">
                  {selectedMember.intro}
                </Typography>
              </div>
            </DialogContent>
          </>
        )}
      </Dialog>
    </div>
  );
}
