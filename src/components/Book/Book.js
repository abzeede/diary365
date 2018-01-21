import React from 'react'

const BookContainer = styled.div`
  margin: 40px;
  .page {
    display: inline-block;
    width: 400px;
    height: 550px;
    position: relative;
  }
  .page:before, .page:after {
    content: "";
    display: block;
    width: 100%;
    height: 14px;
    border-radius: 50%;
    position: absolute;
  
  }
  .left-page:before {
    background: #d8d8d8;
    top: -7px;
  }
  .right-page:before {
    background: #fff;
    top: -7px;
  }
  .page:after {
    background: #e8e8e8;
    bottom: -7px;
  }
  .left-page {
    background: #d8d8d8;
  }
  .right-page {
    background: #fff;
  }
`

const Book = ({ contentLeft, contentRight }) => (
  <BookContainer>
    <div className="page left-page">
      {contentLeft}
    </div>
    <div className="page right-page">
      <div>
        {contentRight}
      </div>
    </div>
  </BookContainer>
)

export default Book
