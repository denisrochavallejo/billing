1. BasicServicePayment works:
- With 4 entities: Service, Client, Bill and Billing. It has implementation for all CRUD operations on all these entities in UI, expect Billings since they only update its status.
- When a Bill is created (with service categery and period) new Billings are created for all clients.
- Please find attached a Postman collection with examples to use BasicBilling.API

2. In order to build this app please follow next steps in basic-service-payment folder:
- execute 'npm install'
- execute 'ng serve -o'

3. Explain which parts you were not able to accomplish and why
- I couldn't create unit test