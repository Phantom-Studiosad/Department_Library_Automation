import React, { useState, useEffect } from 'react';
import { Card, Button, Spinner} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import splash_bg from '../images/Library.gif'
import PuffLoader from "react-spinners/PuffLoader";
import Navbar from './navbar';
import Foot from './footer';
import "../App.css";

const BookDetail = ({ match }) => {
	const [book, setBook] = useState(null);
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		fetch(
			`https://www.googleapis.com/books/v1/volumes?q=isbn:${match.params.book}`
		)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setBook(res.items[0]);
				
			})
			.catch(console.error);
	}, []);

	
    useEffect(() => {
		window.addEventListener("scroll", () => {
		  if (window.pageYOffset > 50) {
			setShowButton(true);
		  } else {
			setShowButton(false);
		  }
		});
	  }, []);
  
	  const [loading,setLoading] = useState(false);
	  useEffect(()=>{
		  setLoading(true)
		  setTimeout(() =>{
			  setLoading(false)            
		  }, 2500)
	  }, [])
	
	  // This function will scroll the window to the top 
	  const scrollToTop = () => {
		window.scrollTo({
		  top: 0,
		  behavior: 'smooth' // for smoothly scrolling
		});
	  };

	if (book === null) {
		return (
			<div>
				{
					loading?
					<div class="cus2">
						<img src={splash_bg} class="splash_logo1" alt="logo"></img>
						<div class="cus1">
						<PuffLoader
						color={"#db2cc0"} 
						loading={loading} 
						size={50} />
						</div>
					</div>
					:
					<div className='margin'>
						<br />
						<div className='d-flex justify-content-center'>
							<Spinner animation='border' variant='primary' />
						</div>
						<div>
							<h6>Loading... Please Wait</h6>
							<p>
								If your book does not load in a few seconds - please navigate back
								to home and try your search again
							</p>
							<Link to={'/opac'}>
								<Button variant='dark'>Home</Button>
							</Link>
						</div>
					</div>
				}
			</div>
		);
	}
	return (
		<div>
			{
				loading?
				<div class="cus2">
						<img src={splash_bg} class="splash_logo1" alt="logo"></img>
						<div class="cus1">
						<PuffLoader
						color={"#db2cc0"} 
						loading={loading} 
						size={50} />
						</div>
				</div>
				:
				<div>
					<div  id="colorlib-page">
						<div id="container-wrap">
							<div class="hero-gradient1">
								<div class="hero-fadeout-gradient1">
									<Navbar/>
								</div>
							</div>
							<div class="container">
								<Card className='book-box card-cascade-narrower detail' style={{textAlign:"left"}}>
									{book.volumeInfo.previewLink && book.volumeInfo.imageLinks && (
										<a
											target='_blank'
											rel='noreferrer'
											href={book.volumeInfo.previewLink}>
											<Card.Img
												className='book-image'
												src={book.volumeInfo.imageLinks.thumbnail}
											/>
										</a>
									)}
									<Card.Title>{book.volumeInfo.title}</Card.Title>
									{book.volumeInfo.authors &&
										book.volumeInfo.authors.map((author, i) => {
											return (
												<Card.Subtitle key={i} className='mb-2 text-muted'>
													{author}
												</Card.Subtitle>
											);
										})}
									{book.volumeInfo.categories && (
										<Card.Subtitle variant='secondary' size='sm'>
											{book.volumeInfo.categories[0]}
										</Card.Subtitle>
									)}
									<hr />
									{book.volumeInfo.description && (
										<Card.Text>{book.volumeInfo.description}</Card.Text>
									)}
									{book.volumeInfo.publisher && (
										<Card.Text variant='secondary' size='sm'>
											Publisher: {book.volumeInfo.publisher}
										</Card.Text>
									)}
									{book.volumeInfo.publishedDate && (
										<Card.Text variant='secondary' size='sm'>
											Published Date: {book.volumeInfo.publishedDate}
										</Card.Text>
									)}
									<Card.Text variant='secondary' size='sm'>
										Page Count: {book.volumeInfo.pageCount}
									</Card.Text>
									<hr />
									<div class="text-center">
										{book.volumeInfo.infoLink && (
											<a
												target='_blank'
												rel='noreferrer'
												href={book.volumeInfo.infoLink}
												className='d-flex justify-content-center'>
												<button class="btn navbar-btn send margin-b"><span class="fa fa-bookmark"></span> Read Now</button>
											</a>
										)}
									</div>									
								</Card>
								<div className='text-center'>
									<Link to={'/opac'}>
										<button class="btn navbar-btn guestp margin-b"><span class="fa fa-book"></span> BookList</button>
									</Link>
								</div>
							</div>
						</div>
						<Foot></Foot>
						{showButton && (
                            <button onClick={scrollToTop} className="back-to-top" title="Scroll Up">
                                <span><i class="fa fa-chevron-circle-up"></i></span>
                            </button>
                		)}
					</div>									
				</div>
			}
		</div>
	);
};

export default BookDetail;