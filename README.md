<div align="center"> <h1>Department_Library_Automation (E-Library)</h1></div>

<div align="center">
  <a href="https://e-libraryse.netlify.app/"><img src="https://github.com/dharun-narayanan/Department_Library_Automation/blob/master/src/images/link.png" width="80"></a>
</div>

## <b>Abstract</b>
<p>
  Department Library Automation is software designed to manage a library's primary housekeeping functions. Libraries use library management systems to keep track of their asset collections and interactions with their patrons. Department Library Automation assist libraries in keeping track of books and their checkouts, as well as subscriber profiles and subscriptions. It is a user-friendly system created to ensure the proper management of books in a library. Maintaining the database for inputting new books and documenting books that have been borrowed with their due dates is another part of library management systems. Department Library Automation makes issue and returning process easy..
</p>
<p>
  The automation of library helps in easy access of library material; one can search the book or journal from home. It makes library more flexible as one can know when to add new books or other items, and an Online Public Access Catalogue, online database of materials kept in the library. It allows the search for an item of our choice in the library.
</p>

## <b>Stakeholders:</b>
- Librarian 
- Student 
- Faculty/Employees
- Research Scholars

## <b>Reports:</b>
-	Requirement report – Contains the requirement of stakeholders.
-	Software requirement specification – modules to be included in software.
-	Bi-weekly project report – Progress made in last 2 weeks.
-	Testing report – Includes modules with errors and modules that work correctly.
-	Debugging report – Errors that are rectified.
-	User feedback – Users likes and dislikes about the software.

## <b>Modules:</b>
1.	Adding new books
2.	Search books
3.	Removing books
4.	Availability check
5.	Categorisation
6.	Borrow/return book
7.	View Fines
8.	FAQ’s
9.	User status
10.	 Barcode reader
11.	 People in Library
12.	 Fine payment
13.	 E-books
14.	 Create user
15.	 Modify user
16.	 Delete user
17.	 Report bug
18.	 Enquiry form

## <b>Forms:</b>
#### 1.	Login
- Admin Login Form
- User Login form
- Security question validation form
= Password reset form

#### 2.	Book
-	Book addition form
-	Book deletion form
-	Book modification form

#### 3.	User
-	User addition form
-	User deletion form
-	User modification form

#### 4.	Search
-	Book search form

#### 5.	Contact
-	Query to librarian form
-	Bug report to developer form

## <b>Software/Technology Used:</b>
- VS Code
- Android Studio
- React JS
- Java
- Bootstrap
- Firebase
- Chrome/Edge, 

## <b>Hardware:</b>
PC/Laptop with internet browser, Mobile phone with android 6.0 or above


## <b>Tables:</b>
Master:
- Book – Book details with availability, Primary key = (Book_id)
- Users – User details and credentials, Primary key = (User_id)
- Bugs - Reported bugs in software, Primary key = (Bug_id)
- Suggested-books – New Books suggested by users, Primary key = (Book_name)

Transaction:
- Borrow – Borrow details with fines, Primary key = (User_id, Book_id), foreign key=(User_id), (Book_id)
- User Activity – User entry/exit details, Primary key = (User_id, time), foreign key=(User_id)
- Transaction – Fine payment transaction details, Primary key =(Transaction_id), foreign key=(User_id)

## <b>Requirements:</b>
-	Books --- Bname, Barcode, Physical Location, count (in stock, on shelves, in circulation, missing, ordered/to be ordered, to be replaced).
-	Search --- By title, author, topic, catalogue, publisher.
-	Fine --- Collected, pending, overdue.
-	Maintenance.

#### 1.	Librarian (Add/Delete/Modify/Update)
  -	User entries, Fine collection 
  -	Track Fine payment details.
  -	Details & access of books, users, fine.
  -	Barcode scan 
  -	Sending Reminders and notifications (renewals & return dates, fine) 
  -	Searching for books based on title, author, category etc.,
  -	Notifying users upon the arrival of new books

#### 2.	User--Research Scholars
  -	Searching for books based on title, author, category etc.,
  -	Book reservations
  -	To keep track of borrowed books and no. of days to hold a book.
  -	Book Lost Option.
  -	View Due dates and fine payment.
  -	Access to research articles and publish articles.
  -	New book suggestions

#### 3.	User--Student (Add/Delete/Modify/Update)
  -	Searching for books based on title, author, category etc.,
  -	Book reservations
  -	To keep track of borrowed books and no. of days to hold a book.
  -	Viewing borrowing restriction
  -	Book Lost Option.
  -	View Due dates and fine payment.
  -	New book suggestions

#### 4.	User--Faculty (Add/Delete/Modify/Update)
  -	Searching for books based on title, author, category etc.,
  -	Book reservations
  -	To keep track of borrowed books and no. of days to hold a book.
  -	Book Lost Option.
  -	View Due dates and fine payment.
  -	New book suggestions


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
