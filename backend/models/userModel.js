import supabase from '../database/conector.js';

export const signIn = async (email, password) => {
    const { data, error } = await supabase.from('users').select('*').eq('email', email).eq('password', password).single();
    if (error) throw new Error('Invalid Email or Password');
    return data;
};

export const registerUser = async (user) => {
    const { data, error } = await supabase.from('users').insert([user]);
    if (error) throw new Error('Invalid User Data');
    return data;
};

export const createAdmin = async () => {
    const adminUser = {
        name: 'Admin',
        email: 'admin@example.com',
        password: '1234',
        is_admin: true,
    };

    const { data, error } = await supabase.from('users').insert([adminUser]);
    if (error) throw new Error(error.message);
    return data;
};
