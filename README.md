# My Online Forum

Your task for this part of the module will be to take the Spring + React template
application you have received and turn it into an online discussion forum! As you
see, some parts have been done for you. For example, you will not need to worry about how
to handle the authentication (registration and login) as that has already been fixed.

The web application is made up of three parts: database, backend and frontend. You will
be doing work on the backend (Spring) and frontend (React). Both Spring and React are
quite big and complex tools. Knowing how to use them takes some time but when you do,
they are very useful and offer a great amount of help. The usual problem when you're
faced with big frameworks you haven't used before is knowing where to start. Therefore,
we are going to make it easier for you by giving you recommended courses of action. You'll start by using a bare bone template with Spring, React, and small number of useful dependencies. To read more about the template please check `Help.md`.

### Page Branding

One thing you'll notice when you click around your web application is that it looks generic. It says SDA starter
template in some places and it doesn't really give you an idea of what the website is about.

Your first task is
to brand your page by switching out all the SDA starter template placeholders and replacing them with your own
brand name and logo. You should also give a quick introduction text on the landing page (and home page) that says what your forum is about.
You are free to choose the theme of your forum (could be environment, food/drinks, agriculture or even a forum entirely dedicated
to [this guy](https://upload.wikimedia.org/wikipedia/commons/7/7b/Richard_Stallman_-_F%C3%AAte_de_l%27Humanit%C3%A9_2014_-_010.jpg)).
The UI components that you need to change are:
​

- `frontend/src/components/auth/LoginPage.js`
- `frontend/src/components/home/HomePage.js`
- `frontend/src/components/layout/Navbar.js`

Tip: for the name and logo these websites might come in handy:

- <https://namelix.com/>
- <https://hatchful.shopify.com/>

Be creative! You can also choose to change the background image, the font styles, colors, etc.

**IMPORTANT!** WHEN YOU CODE, MAKE SURE TO COMMIT OFTEN:
>>>
> ...Whenever you add a new feature that's worth commiting, commit. You added a working method? Commit. You fixed a
>typo? Commit. You fixed a file wrong indentation? Commit. There's nothing wrong commiting small changes, as soon as
>the commit is relevant.

Use branches, pull requests and reviews. This will be a BIG part of your assessment.

### Posts & Comments

Define and implement the necessary entities, APIs and React components that you need for posting and commenting in our forum.

As we're keeping it relatively simple, we will only be adding minimal functionality.
Simplified, the functionalities to add are:

- Create a post
- Delete a post
- View all posts
- Write a comment on a post
- Delete a comment on a post
- View all comments on a post

### Who posted/commented

So far in your application you should be able to login and make a post and make a comment. The problem is that posts and
comments don't seem to belong to any user. There is no indication of who posted or commented and you can freely delete
anyone's (hopefully) intellectual contribution. Since we do not want to suppress free speech, each comment and post
should only be deletable by the user who posted it. Also, for us to differentiate between posters and commenters we
should attach a username (in this case, email) to each post and each comment. The task here is to add a relationship
between users and posts, and a relationship between users and comments, so that posts and comments become personal

- Add associations to your entities so that `Post` and `Comment` have a user. Should we have OneToOne, OneToMany, or ManyToMany?
- In a post, show the email of the person who posted it.
- In a comment, show the email of the person who made it.
- Make sure only the person who is the creator of a post/comment can delete it.


### (Extra 1) External API integrations

There are thousands of useful external APIs that provide interesting facts. Check [this](https://github.com/whizkydee/Awesome-APIs) . Choose one or more APIs that can be integrated into your application based on your chosen theme. These external APIs can be either mad from the backend of our application or the frontend. What are the different tradeoffs?

### (Extra 2) Direct Messaging

It is nice that we can communicate with people in our application but sometimes we might not want to communicate with
absolutely everyone. Wouldn't it be even nicer to be able to speak with someone in private so that you don't bother
everyone else with your messages? In this task you are to create functionality for direct messaging another user. It
doesn't have to be real-time messaging, that is a bit more advanced than the things we've covered so far. This
is a task where we leave the implementation almost entirely up to you because of two important reasons:

1. We do not want to limit your creativity, so you get to apply as much as you can of what you've learned.
2. We get away with writing a shorter task specification :)

Go ahead and do your magic, best of luck on the tasks!

### (Extra 3) Extra features

Feel free to add as many extra features that you want.  These features should either add value to the users of the application or showcase your technical knowledge. It would be great if you can achieve both. Example features:

* Images/file attachments: Users can optionally attach images or files when they post/comment.
* Like/Dislikes.
* Groups: similar to Facebook groups.
* Searching old posts and comments.
* Pagination/Sorting.
