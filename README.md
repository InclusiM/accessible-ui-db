# Accessing the Website

in yli25 folder in the VM, goto accessible-ui-db folder, run the following command:
## Running the Application

1. Build Docker Image
   ```bash
   docker build -t accessible-ui-db .
   ```

2. Run Docker Container
   ```bash
   docker run -p 3011:3000 -p 8011:8080 accessible-ui-db
   ```
   > Note: If you don't have VM access, please contact Agnes Li (yli25@colby.edu)

## Accessing the Website
Once the container is running, access the application at:
```
https://137.146.29.181:8011
```
> Note: Port numbers may vary depending on configuration. The application uses:
> - Frontend: Port 8011 (mapped from container port 8080)
> - Backend: Port 3011 (mapped from container port 3000)
