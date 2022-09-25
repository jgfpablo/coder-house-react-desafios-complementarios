import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MySwal = withReactContent(Swal);

const Add = (setCount, count, data) => {
    if (count === data.cantidad) {
        MySwal.fire({
            html: <i>No quedan mas existencias de este producto!</i>,
            icon: "warning",
        });
    } else {
        setCount(count + 1);
    }
};

const Subtract = (setCount, count) => {
    if (count === 0) {
        MySwal.fire({
            html: <i>La cantidad minima de producto ya ah sido alcanzada!</i>,
            icon: "warning",
        });
    } else {
        setCount(count - 1);
    }
};

const Minimum = () => {
    MySwal.fire({
        html: <i>La cantidad minima a agregar es 1 !</i>,
        icon: "warning",
    });
};

const AddedProduct = () =>
    toast.info("Se agrego el producto al carrito!!", {
        autoClose: 1000,
        theme: "dark",
    });

<ToastContainer />;

export { Add, Subtract, Minimum, AddedProduct, ToastContainer };
