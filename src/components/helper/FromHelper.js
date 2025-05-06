import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


class FormHelper {


  ErrorToast(msg) {
    toast.error(msg, {
      position: "top-right", // You can change the position here
      autoClose: 5000, // Auto close after 5 seconds
      style: {
        backgroundColor: "#ff4d4d", // Red background for error
        color: "#fff", // White text
        borderRadius: "8px", // Rounded corners
        fontSize: "16px", // Font size
      },
    });
  }

  SuccessToast(msg) {
    toast.success(msg, {
      position: "top-right", // You can change the position here
      autoClose: 5000, // Auto close after 5 seconds
      style: {
        backgroundColor: "#4caf50", // Green background for success
        color: "#fff", // White text
        borderRadius: "8px", // Rounded corners
        fontSize: "16px", // Font size
      },
    });
  }
}

export const { ErrorToast, SuccessToast } =
  new FormHelper();
