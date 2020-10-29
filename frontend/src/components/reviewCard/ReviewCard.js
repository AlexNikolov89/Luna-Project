import React from 'react'
import { ReviewCardWrapper, TopContainer, Image, ReviewContent, LikeCommentButton, ButtonLike, ButtonComment, CommentsArea} from './style'

const ReviewCard = ({review}) => {
    return (
        <ReviewCardWrapper>
            <TopContainer>
                <Image>IMG</Image>
                <h4>Name and Surname</h4>
                <p>Reviews in total</p>
            </TopContainer>
            <ReviewContent>
                <h5>Customer Name</h5>
                <p>Review Text......</p>
            </ReviewContent>
             <LikeCommentButton>
              <ButtonLike>Like 0</ButtonLike>
               <ButtonComment>Comment 0</ButtonComment>
                 </LikeCommentButton>
                  <CommentsArea>
                       <h3>Latest Comments</h3>
                        <h5>User Name</h5>
                         <p>Comment......</p>
                   </CommentsArea>
                 </ReviewCardWrapper>
    )
}

export default ReviewCard;
