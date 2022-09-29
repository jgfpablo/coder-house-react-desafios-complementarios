import {
    collection,
    getDocs,
    query,
    doc,
    getDoc,
    addDoc,
    updateDoc,
    where,
} from "firebase/firestore";
import { db } from "./components/Firebase/FirebaseConfig";

export const createItem = async (obj) => {
    const colRef = collection(db, "ordenes");
    const data = await addDoc(colRef, obj);
    return data.id;
};

export const updateItem = async (id, obj) => {
    const colRef = collection(db, "productos");
    await updateDoc(doc(colRef, id), obj);
};

export const getItems = async (setLoading) => {
    const colRef = collection(db, "productos");
    const result = await getDocs(query(colRef));
    setLoading(false);
    return getArrayFromCollection(result);
};

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

export const getItemById2 = async (id) => {
    const colRef = collection(db, "productos");
    const result = await getDoc(doc(colRef, id));
    return result.data();
};

const getArrayFromCollection = (collection) => {
    return collection.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
    });
};
