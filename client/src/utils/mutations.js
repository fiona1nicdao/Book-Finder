import {gql} from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password:String!){
        loginUser(email:$email, password:$password)
        {
            token
            user{_id, username}
        }
    }
`;
export const ADD_USER = gql`
    mutation addUser($username:String!, $email:String!, $password:String!){
        addUser(username:$username, email:$email, password:$password)
        {
            token
            user{_id, username, email, bookCount, savedBooks}
        }
    }
`;
export const SAVE_BOOK = gql`
    mutation saveBook($newbook: InputBook!){
        saveBook(newbook:$newbook)
        {_id,username, email, savedBooks}
    }
`;
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!){
        removedBook(bookId:$bookId)
        {_id, username, email, savedBooks}
    }
`;

// savedBooks??? should i add authors, description, bookId, title, image, link