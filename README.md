
# MangoDB - Smoothie Inventory Management App

MangoDB is a single-page web application designed for business owners. For our version one, this application is specific to smoothie companies!

MangoDB allows users (company owners) to keep track of their inventory. Owners can add, update and delete items from their inventory, and each item is part of a specific category (fruits, vegetables, proteins, add-ins, and bases).


## Important Links

- [MangoDB API Repo](https://github.com/LadiesLoveCleanCode/MangoDB-api)
- [Deployed API](www.link.com)
- [Deployed Client](www.link.com)

## Planning Story

We began planning by selecting a project idea from a list of prompts. Once we had chosen an inventory management app, we decided to limit the context in which the app can be used for version 1. We decided on smoothies because WE LOVE HEALTHY FOOD!

Our first step was to set up the back end API and make sure we were able to CRUD on authentication and resources. Next, we moved on to setting up the front end, following a similar CRUD process. Finally, we designed the front end using the React framework.

### User Stories

- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to create an inventory item.
- As a signed in user, I would like to update my inventory items.
- As a signed in user, I would like to delete my inventory items.
- As a signed in user, I would like to see all items.
- As a signed in user, I would like to see the quantity and price of each item.
- As a signed in user, I want to be able to update or create inventory without having to know what my current inventory levels are.
- If the product exists in the inventory, the app should make a PATCH request to update the existing item. If I don’t have enough product (when reducing product counts) the app should not allow the update.
- If the product does not exists in the inventory, the app should make a POST request to create the new item.

### Technologies Used

- HTML/CSS
- Bootstrap
- Javascript
- React
- React Router

### Catalog of Routes

Verb         |	URI Pattern
------------ | -------------
GET | /item
GET | /item/:id
POST | /item
PATCH | /item/:id
DELETE | /item/:id

### Unsolved Problems

- Still need to ....
- Would like to eventually ....

## Images

#### Wireframe:
[MangoDB Wireframe](https://imgur.com/a/YPR2Pwn)

---

#### ERD:
[MangoDB ERD](https://miro.com/app/board/o9J_kmqs5VA=/)
