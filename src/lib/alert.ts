import Swal from "sweetalert2";

export const alertSuccess = async (message: string) => {
  return Swal.fire({
    icon: "success",
    title: "Succesfuly",
    text: message,
  });
};

export const alertError = async (message: string) => {
  return Swal.fire({
    icon: "error",
    title: "Error",
    text: message,
  });
};
