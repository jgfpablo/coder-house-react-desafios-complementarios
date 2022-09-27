import {
    collection,
    getDocs,
    query,
    doc,
    getDoc,
    addDoc,
    deleteDoc,
    updateDoc,
    // setDoc,
    where,
} from "firebase/firestore";
import { db } from "./components/Firebase/FirebaseConfig";

// CREATE
export const createItem = async (obj) => {
    const colRef = collection(db, "productos");
    const data = await addDoc(colRef, obj);
    return data.id;
};

// UPDATE
export const updateItem = async (id, obj) => {
    const colRef = collection(db, "productos");
    await updateDoc(doc(colRef, id), obj);
};

// READ
export const getItems = async (setLoading) => {
    const colRef = collection(db, "productos");
    const result = await getDocs(query(colRef));
    setLoading(false);
    return getArrayFromCollection(result);
};

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (value, setLoading) => {
    const colRef = collection(db, "productos");
    const result = await getDocs(
        query(colRef, where("categoria", "==", value))
    );
    setLoading(false);
    return getArrayFromCollection(result);
};

export const getItemById = async (id, setLoading) => {
    const colRef = collection(db, "productos");
    const result = await getDoc(doc(colRef, id));
    setLoading(false);
    return result.data();
};

// DELETE
export const deleteItem = async (id) => {
    const colRef = collection(db, "productos");
    await deleteDoc(doc(colRef, id));
};

const getArrayFromCollection = (collection) => {
    return collection.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
    });
};
