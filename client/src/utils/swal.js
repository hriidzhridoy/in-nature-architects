import Swal from "sweetalert2";

export const showSuccess = (message = "Success!") => {
  return Swal.fire({
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1800,
  });
};

export const showError = (message = "Something went wrong!") => {
  return Swal.fire({
    icon: "error",
    title: "Error",
    text: message,
  });
};

export const showInfo = (message = "Info") => {
  return Swal.fire({
    icon: "info",
    title: message,
  });
};

export const confirmAction = async (
  title = "Are you sure?",
  text = "You won't be able to revert this!",
  confirmText = "Yes",
) => {
  const result = await Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#000",
    cancelButtonColor: "#d1d5db",
    confirmButtonText: confirmText,
  });

  return result.isConfirmed;
};

export const showLoading = (message = "Please wait...") => {
  Swal.fire({
    title: message,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
};

export const closeAlert = () => {
  Swal.close();
};
