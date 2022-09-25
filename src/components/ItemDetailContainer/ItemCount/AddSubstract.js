import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
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

export { Add, Subtract };
