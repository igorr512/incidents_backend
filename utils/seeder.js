
import IncidentModel from "../models/incident.js"
import connectDB from "../config/db.js";
import mongoose from "mongoose";


async function seedDatabase(){
    try{
        await connectDB();
        const incidents = [
          {
            "number": "inc1234",
            "description": {
              "id": "storage",
              "project": "sharepoint",
              "message": "Disk space low on server",
              "description": "Server running out of disk space"
            },
            "close_notes": "Resolved by clearing temp files"
          },
          {
            "number": "inc5678",
            "description": {
              "id": "system",
              "project": "office",
              "message": "Application crash",
              "description": "Microsoft Word crashed unexpectedly"
            },
            "close_notes": "Reinstalled Microsoft Office suite"
          },
          {
            "number": "inc291011",
            "description": {
              "id": "network",
              "project": "sharepoint",
              "message": "Network connectivity issue",
              "description": "Unable to access SharePoint site"
            },
            "close_notes": "Issue resolved after router reboot"
          },
        {
            "number": "inc12234",
            "description": {
              "id": "storage",
              "project": "sharepoint",
              "message": "Disk space low on server",
              "description": "Server running out of disk space"
            },
            "close_notes": "Resolved by clearing temp files"
          },
          {
            "number": "inc56278",
            "description": {
              "id": "system",
              "project": "office",
              "message": "Application crash",
              "description": "Microsoft Word crashed unexpectedly"
            },
            "close_notes": "Reinstalled Microsoft Office suite"
          },
          {
            "number": "inc912011",
            "description": {
              "id": "network",
              "project": "sharepoint",
              "message": "Network connectivity issue",
              "description": "Unable to access SharePoint site"
            },
            "close_notes": "Issue resolved after router reboot"
          },
          {
            "number": "inc121314",
            "description": {
              "id": "storage",
              "project": "office",
              "message": "File corruption",
              "description": "Corrupted Excel file"
            },
            "close_notes": "Restored from backup"
          },
          {
            "number": "inc151617",
            "description": {
              "id": "system",
              "project": "sharepoint",
              "message": "Server downtime",
              "description": "SharePoint server down for maintenance"
            },
            "close_notes": "Issue resolved after server restart"
          },
          {
            "number": "inc181920",
            "description": {
              "id": "network",
              "project": "office",
              "message": "Slow internet connection",
              "description": "Users experiencing slow internet speeds"
            },
            "close_notes": "Contacted ISP to resolve bandwidth issue"
          },
          {
            "number": "inc5678",
            "description": {
              "id": "system",
              "project": "office",
              "message": "Application crash",
              "description": "Microsoft Word crashed unexpectedly"
            },
            "close_notes": "Reinstalled Microsoft Office suite"
          },
          {
            "number": "inc91011",
            "description": {
              "id": "network",
              "project": "sharepoint",
              "message": "Network connectivity issue",
              "description": "Unable to access SharePoint site"
            },
            "close_notes": "Issue resolved after router reboot"
          },
          {
            "number": "inc212223",
            "description": {
              "id": "storage",
              "project": "sharepoint",
              "message": "Disk space low on server",
              "description": "Server running out of disk space"
            },
            "close_notes": "Resolved by clearing temp files"
          },
          {
            "number": "inc242526",
            "description": {
              "id": "system",
              "project": "office",
              "message": "Application crash",
              "description": "Microsoft Word crashed unexpectedly"
            },
            "close_notes": "Reinstalled Microsoft Office suite"
          },
          {
            "number": "inc272829",
            "description": {
              "id": "network",
              "project": "sharepoint",
              "message": "Network connectivity issue",
              "description": "Unable to access SharePoint site"
            },
            "close_notes": "Issue resolved after router reboot"
          },
          {
            "number": "inc303132",
            "description": {
              "id": "storage",
              "project": "office",
              "message": "File corruption",
              "description": "Corrupted Excel file"
            },
            "close_notes": "Restored from backup"
          },
          {
            "number": "inc151617",
            "description": {
              "id": "system",
              "project": "sharepoint",
              "message": "Server downtime",
              "description": "SharePoint server down for maintenance"
            },
            "close_notes": "Issue resolved after server restart"
          },
          {
            "number": "inc181920",
            "description": {
              "id": "network",
              "project": "office",
              "message": "Slow internet connection",
              "description": "Users experiencing slow internet speeds"
            },
            "close_notes": "Contacted ISP to resolve bandwidth issue"
          },
          {
            "number": "inc212223",
            "description": {
              "id": "storage",
              "project": "sharepoint",
              "message": "Disk space low on server",
              "description": "Server running out of disk space"
            },
            "close_notes": "Resolved by clearing temp files"
          },
          {
            "number": "inc242526",
            "description": {
              "id": "system",
              "project": "office",
              "message": "Application crash",
              "description": "Microsoft Word crashed unexpectedly"
            },
            "close_notes": "Reinstalled Microsoft Office suite"
          },
          {
            "number": "inc273031",
            "description": {
              "id": "network",
              "project": "sharepoint",
              "message": "Network connectivity issue",
              "description": "Unable to access SharePoint site"
            },
            "close_notes": "Issue resolved after router reboot"
          },
          {
            "number": "inc303132",
            "description": {
              "id": "storage",
              "project": "office",
              "message": "File corruption",
              "description": "Corrupted Excel file"
            },
            "close_notes": "Restored from backup"
          },
          {
            "number": "inc212223",
            "description": {
              "id": "storage",
              "project": "sharepoint",
              "message": "Disk space low on server",
              "description": "Server running out of disk space"
            },
            "close_notes": "Resolved by clearing temp files"
          },
          {
            "number": "inc242526",
            "description": {
              "id": "system",
              "project": "office",
              "message": "Application crash",
              "description": "Microsoft Word crashed unexpectedly"
            },
            "close_notes": "Reinstalled Microsoft Office suite"
          },
          {
            "number": "inc273031",
            "description": {
              "id": "network",
              "project": "sharepoint",
              "message": "Network connectivity issue",
              "description": "Unable to access SharePoint site"
            },
            "close_notes": "Issue resolved after router reboot"
          },
          {
            "number": "inc333435",
            "description": {
              "id": "storage",
              "project": "office",
              "message": "File corruption",
              "description": "Corrupted Excel file"
            },
            "close_notes": "Restored from backup"
          },
        {
            "number": "inc3013132",
            "description": {
              "id": "storage",
              "project": "office",
              "message": "File corruption",
              "description": "Corrupted Excel file"
            },
            "close_notes": "Restored from backup"
          },
          {
            "number": "inc2121223",
            "description": {
              "id": "storage",
              "project": "sharepoint",
              "message": "Disk space low on server",
              "description": "Server running out of disk space"
            },
            "close_notes": "Resolved by clearing temp files"
          },
          {
            "number": "inc2412526",
            "description": {
              "id": "system",
              "project": "office",
              "message": "Application crash",
              "description": "Microsoft Word crashed unexpectedly"
            },
            "close_notes": "Reinstalled Microsoft Office suite"
          },
          {
            "number": "inc2713031",
            "description": {
              "id": "network",
              "project": "sharepoint",
              "message": "Network connectivity issue",
              "description": "Unable to access SharePoint site"
            },
            "close_notes": "Issue resolved after router reboot"
          },
          {
            "number": "inc3334235",
            "description": {
              "id": "storage",
              "project": "office",
              "message": "File corruption",
              "description": "Corrupted Excel file"
            },
            "close_notes": "Restored from backup"
          }
        ];

            // Delete existing incidents (to reset the data of the DB)
            await IncidentModel.deleteMany({});

            // Insert new data
            await IncidentModel.insertMany(incidents);

            console.log("Database was seeded successfully")


    }
    catch(err){
        console.error("Error seeding database: " + err);

    }
    finally{
        mongoose.connection.close();
    }
}
seedDatabase();