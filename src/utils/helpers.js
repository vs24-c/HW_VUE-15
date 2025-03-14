import { v4 as uuidv4 } from "uuid";

export const generateId = () => uuidv4();

export const findById = (array, id) => array.findIndex((item) => item.id == id);

export const updateItemById = (array, newItem) => {
  const index = findById(array, newItem.id);
  if (index !== -1) {
    array[index] = { ...newItem };
  }
};

export const deleteItemById = (array, id) => {
  const index = findById(array, id);
  if (index !== -1) {
    array.splice(index, 1);
  }
};
