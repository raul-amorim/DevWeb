import supabase from '../database/conector.js';

export const getAllProducts = async () => {
    const { data, error } = await supabase.from('products').select('*');
    if (error) throw new Error(error.message);
    return data;
};

export const getProductById = async (id) => {
    const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
    if (error) throw new Error(error.message);
    return data;
};

export const createProduct = async (product) => {
    const { data, error } = await supabase.from('products').insert([product]);
    if (error) throw new Error(error.message);
    return data;
};

export const updateProduct = async (id, product) => {
    const { data, error } = await supabase.from('products').update(product).eq('id', id);
    if (error) throw new Error(error.message);
    return data;
};

export const deleteProduct = async (id) => {
    const { data, error } = await supabase.from('products').delete().eq('id', id);
    if (error) throw new Error(error.message);
    return data;
};
