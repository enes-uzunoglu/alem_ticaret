// userActions.js

export const USER_SET = 'USER_SET';

export const setUser = (user) => ({
    type: USER_SET,
    payload: user,  // Kullanıcı verisini payload olarak gönderiyoruz
});
