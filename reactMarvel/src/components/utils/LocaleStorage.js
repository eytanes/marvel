const SAVE_PREFIX = 'marvel-';

export const get = key => {
    return  JSON.parse(localStorage.getItem(key)) || ''
}

export const save = (key, value) => {
    localStorage.setItem(key, value)
}

export const saveComment = (_id, com) => {
    const id = SAVE_PREFIX+ _id;
    const comments = get('comments') || {}
    comments[id] = comments[id] || [];
    comments[id].push(com);
    save('comments', JSON.stringify(comments));
}

export const getComments = id => {
    const comments = get('comments') || {}
    return comments[SAVE_PREFIX + id] || []; 
}

// {
//     comments:{
//         0: ['dfdfdfdf', 'dfjdfidjf']
//     }
// }
