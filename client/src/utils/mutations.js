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
            user{_id, username, email, bookCount, savedBooks{
                authors, description, title, bookId, image, link
            }}
        }
    }
`;
export const SAVE_BOOK = gql`
    mutation saveBook($bookData: InputBook!){
        saveBook(book:$bookData)
        {
            _id,
            username,
            email,
            savedBooks{
                authors, 
                description, 
                title, 
                bookId, 
                image, 
                link
        }}
    }
`;
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!){
        removedBook(bookId:$bookId)
        {_id, username, email, savedBooks{
            authors, description, title, bookId, image, link
        }}
    }
`;