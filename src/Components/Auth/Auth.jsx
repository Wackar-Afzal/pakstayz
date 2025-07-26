"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import {
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
import { Phone, User, CalendarDays, Venus, CircleX } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signUpFunction, signInFunction } from "@/utilities/user";
import CircularProgress from "@mui/material/CircularProgress";
import {
  useAppointmentStore,
  useAuthBannerStore,
  useUserStore,
} from "@/store/store";
import { usePathname } from "next/navigation";
// Theme setup
const theme = createTheme({
  palette: {
    primary: {
      main: "#c673c0",
      contrastText: "#fff",
    },
  },
});

// Format date to "Month Day"
const formatDateWithoutYear = (date) =>
  new Date(date).toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
  });

// Validation Schemas
const signupSchema = Yup.object({
  phone: Yup.string()
    .matches(/^05\d{8}$/, "Enter a valid UAE number starting with 05")
    .required("Phone number is required"),
  name: Yup.string().required("Name is required"),
  birthDate: Yup.date().required("Birth date is required"),
  gender: Yup.string().required("Gender is required"),
});
const signinSchema = Yup.object({
  phone: Yup.string()
    .matches(/^05\d{8}$/, "Enter a valid UAE number starting with 05")
    .required("Phone number is required"),
});

export default function Auth() {

  const path=usePathname()
  console.log(path,"pathhhh")
  // const [openDialog, setOpenDialog] = useState(false);
  // const [isSignup, setIsSignup] = useState(false);

  const [loading, setLoading] = useState(false);
  const setUser = useUserStore((state) => state.setUser);
  // const resetUser = useUserStore((state) => state.resetUser);
  const userStore = useUserStore((state) => state.user);
  const [user, setUsers] = useState(null);

  const authbanner = useAuthBannerStore((store) => store.authBanner);
  const setAuthBanner = useAuthBannerStore((store) => store.setAuthBanner);

  const appointments = useAppointmentStore((store) => store.appointments);

  useEffect(() => {
    if (userStore) {
      setUsers(userStore);
    }
    setAuthBanner({show:true})
  }, []);

  const handleClose = () => {
    setAuthBanner({show:false,signIn:false,signUp:false});
    authbanner.signIn ? signupFormik.resetForm() : signinFormik.resetForm();
  };

  const signupFormik = useFormik({
    initialValues: {
      phone: "",
      name: "",
      birthDate: null,
      anniversaryDate: null,
      gender: "",
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const resp = await signUpFunction(values);
        if (resp.success == true) {
          setTimeout(()=>{
            toast.success("Registered successfully!");
          },300)
          setUser(resp.data);
        } else {
          throw Error(resp.message);
        }
        handleClose();
      } catch (err) {
        toast.error(err.message || "Signup failed");
      } finally {
        setLoading(false);
      }
    },
  });

  const signinFormik = useFormik({
    initialValues: { phone: "" },
    validationSchema: signinSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const resp = await signInFunction(values);
        if (resp.success == true) {
          setUser(resp.data);
          setAuthBanner({
            show: false,
            signIn: false,
            signUp: false,
            booking: false,
          });
          setTimeout(()=>{
            toast.success("Signed In Sucessfully");
          },300)
           handleClose();

        } else {
            setTimeout(()=>{
            toast.error(resp.message);
          },300)

        }
      } catch (err) {
        toast.error(err.message || "Login failed");
      } finally {
        setLoading(false);
      }
    },
  });

  const formik = authbanner.signUp ? signupFormik : signinFormik;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
      <div>
        {/* Book Appointment Button */}
        {path=='/'?
        <Link
          href="/services/hair-cut"
          className="bg-[#c673c0] z-1 hover:bg-primary-color/50 rounded-full text-white font-bold py-3 px-8 shadow-lg transition-all fixed m-4 bottom-0"
        >
          Book Appointment
        </Link>:null}

        {/* Sign In Trigger */}
        {authbanner.show ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{
              type: "spring",
              bounce: 0.5,
              duration: 0.5,
              stiffness: 120,
              damping: 10,
            }}
          >
            {(authbanner.booking && appointments.length > 0 && path.includes("/services"))? (
              <div className="flex gap-16 items-center bg-[#282727aa] hover:bg-[#b4b4b3] text-white font-bold py-3 px-8 shadow-lg transition-all fixed left-1/2 transform -translate-x-1/2 bottom-0 my-4 cursor-pointer">
                <p className="text-[14px]">Service Selected: {appointments.length}</p>
                <Link href='/appointment' className="border border-white p-2 text-[10px]">Confirm Booking</Link>
                <button
                  role="button"
                  className="absolute top-0 right-[2%]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setAuthBanner({show:false});
                  }}
                >
                  X
                </button>
              </div>
            ) : ( !user&&
              <div
                role="button"
                tabIndex={0}
                onClick={() => {
                  setAuthBanner({show:true, signIn: true });
                }}
                className="bg-[#ffffff] hover:bg-[#b4b4b3] text-black font-bold py-3 px-4  shadow-lg transition-all fixed left-1/2 transform -translate-x-1/2 bottom-0 my-4 cursor-pointer z-2"
              >
                <p>Tap here to sign in</p>
                <button
                  role="button"
                  className="absolute top-[1%] right-[2%] rounded-full bg-primary-color text-white px-[.3rem] text-[12px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setAuthBanner({ show: false });
                  }}
                >
                  X
                </button>
              </div>
            )}
          </motion.div>
        ) : null}

        {/* Dialog */}
        <Dialog
          open={(authbanner.show && authbanner.signIn)}
          onClose={handleClose}
          fullWidth
          maxWidth="sm"
          TransitionComponent={Slide}
        >
          <form onSubmit={formik.handleSubmit}>
            <DialogTitle className="flex justify-between items-center">
              {authbanner.signUp ? "Sign Up" : "Sign In"}
              <Button onClick={handleClose}>
                <CircleX />
              </Button>
            </DialogTitle>

            <DialogContent className="space-y-4">
              {/* Phone */}
              <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
                <Phone className="w-5 h-5 text-gray-600" />
                <TextField
                  label="Phone"
                  variant="standard"
                  fullWidth
                  {...formik.getFieldProps("phone")}
                  error={formik.touched.phone && !!formik.errors.phone}
                  helperText={formik.touched.phone && formik.errors.phone}
                  inputProps={{
                    maxLength: 10,
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    onInput: (e) => {
                      e.target.value = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);
                    },
                  }}
                />
              </div>

              {/* Extra Signup Fields */}
              {authbanner.signUp && (
                <>
                  {/* Name */}
                  <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
                    <User className="w-5 h-5 text-gray-600" />
                    <TextField
                      label="Name"
                      variant="standard"
                      fullWidth
                      {...formik.getFieldProps("name")}
                      error={formik.touched.name && !!formik.errors.name}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                  </div>

                  {/* Birth Date */}
                  <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
                    <CalendarDays className="w-5 h-5 text-gray-600" />
                    <DatePicker
                      selected={formik.values.birthDate}
                      onChange={(date) =>
                        formik.setFieldValue("birthDate", date)
                      }
                      dateFormat="MMM dd"
                      showMonthDropdown
                      showDayDropdown
                      placeholderText="Birth Date"
                      customInput={
                        <input
                          className="bg-transparent border-0 outline-none w-full"
                          readOnly
                          value={
                            formik.values.birthDate
                              ? formatDateWithoutYear(formik.values.birthDate)
                              : ""
                          }
                        />
                      }
                    />
                  </div>
                  {formik.touched.birthDate && formik.errors.birthDate && (
                    <p className="text-red-500 text-sm -mt-3">
                      {formik.errors.birthDate}
                    </p>
                  )}

                  {/* Anniversary Date (optional) */}
                  <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
                    <CalendarDays className="w-5 h-5 text-gray-600" />
                    <DatePicker
                      selected={formik.values.anniversaryDate}
                      onChange={(date) =>
                        formik.setFieldValue("anniversaryDate", date)
                      }
                      dateFormat="MMM dd"
                      showMonthDropdown
                      showDayDropdown
                      placeholderText="Anniversary Date"
                      customInput={
                        <input
                          className="bg-transparent border-0 outline-none w-full"
                          readOnly
                          value={
                            formik.values.anniversaryDate
                              ? formatDateWithoutYear(
                                  formik.values.anniversaryDate
                                )
                              : ""
                          }
                        />
                      }
                    />
                  </div>
                  {formik.touched.anniversaryDate &&
                    formik.errors.anniversaryDate && (
                      <p className="text-red-500 text-sm -mt-3">
                        {formik.errors.anniversaryDate}
                      </p>
                    )}
                  {/* Gender */}
                  <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
                    <Venus className="w-5 h-5 text-gray-600" />
                    <RadioGroup
                      row
                      name="gender"
                      value={formik.values.gender}
                      onChange={formik.handleChange}
                    >
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                    </RadioGroup>
                  </div>
                  {formik.touched.gender && formik.errors.gender && (
                    <p className="text-red-500 text-sm -mt-3">
                      {formik.errors.gender}
                    </p>
                  )}
                </>
              )}
            </DialogContent>

            {/* Actions */}
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained" color="primary" disabled={loading}>
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : authbanner.signUp ? (
                  "Register"
                ) : (
                  "Continue"
                )}
              </Button>
            </DialogActions>

            {/* Switch Auth Mode */}
            <Button
              className="!mb-4 !ml-4"
              variant="text"
              color="primary"
              onClick={() => setAuthBanner({ signUp: !authbanner.signUp })}
            >
              {authbanner.signUp
                ? "Have an account? Sign In"
                : "Don't have an account? Sign Up"}
            </Button>
          </form>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}
