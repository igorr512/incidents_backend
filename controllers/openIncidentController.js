import { extractData } from "../utils/tools.js"

// const dummyData = {result:[
//     {"number":"inc23213","sys_id":"123213213","opened_at":"2024-03-14 23:01:32",
//     "description":"Id: MSSQL \n time: 2024-04-11 09:54:48 \n Environment: armyts \n Site: Mamram \n Project: Prij \n Hostname: Myserver \n Message: Cool Message So Important \n Severity: Warning \n Description: This is even a longer message"},
//     {"number":"inc232123","sys_id":"123213213","opened_at":"2024-03-14 23:01:32",
//     "description":"Id: MSSQL \n time: 2024-04-11 09:54:48 \n Environment: armyts \n Site: Mamram \n Project: Prij \n Hostname: Myserver \n Message: Cool Second Message So Important \n Severity: Warning \n Description: This is another"}
// ]}

// const localcache = [
//     {
//         description: 'storage:sharepoint:Disk space low on server',
//         mostUsedNote: 'Resolved by clearing temp files',
//         count: 6
//       },
//       {
//         description: 'system:office:Application crash',
//         mostUsedNote: 'Reinstalled Microsoft Office suite',
//         count: 7
//       },
//       {
//         description: 'network:sharepoint:Network connectivity issue',
//         mostUsedNote: 'Issue resolved after router reboot',
//         count: 7
//       },
//       {
//         description: 'storage:office:File corruption',
//         mostUsedNote: 'Restored from backup',
//         count: 6
//       },
//       {
//         description: 'system:sharepoint:Server downtime',
//         mostUsedNote: 'Issue resolved after server restart',
//         count: 2
//       },
//       {
//         description: 'network:office:Slow internet connection',
//         mostUsedNote: 'Contacted ISP to resolve bandwidth issue',
//         count: 2
//       },
//       "2024-05-27T11:41:17.102Z"
// ]

const dummyData = {result:[
    {
      "number": "inc23213",
      "sys_id": "123213213",
      "opened_at": "2024-03-14 23:01:32",
      "description": "Id: MSSQL \n time: 2024-04-11 09:54:48 \n Environment: armyts \n Site: Mamram \n Project: Prij \n Hostname: Myserver \n Message: Cool Message So Important \n Severity: Warning \n Description: This is even a longer message"
    },
    {
      "number": "inc23214",
      "sys_id": "123213214",
      "opened_at": "2024-03-14 23:02:32",
      "description": "Id: storage \n time: 2024-04-11 09:54:48 \n Environment: armyts \n Site: Mamram \n Project: sharepoint \n Hostname: Myserver \n Message: Disk space low on server \n Severity: Warning \n Description: Resolved by clearing temp files"
    },
    {
      "number": "inc23215",
      "sys_id": "123213215",
      "opened_at": "2024-03-14 23:03:32",
      "description": "Id: system \n time: 2024-04-11 09:54:48 \n Environment: armyts \n Site: Mamram \n Project: office \n Hostname: Myserver \n Message: Application crash \n Severity: Warning \n Description: Reinstalled Microsoft Office suite"
    },
    {
      "number": "inc23216",
      "sys_id": "123213216",
      "opened_at": "2024-03-14 23:04:32",
      "description": "Id: network \n time: 2024-04-11 09:54:48 \n Environment: armyts \n Site: Mamram \n Project: sharepoint \n Hostname: Myserver \n Message: Network connectivity issue \n Severity: Warning \n Description: Issue resolved after router reboot"
    },
    {
      "number": "inc23217",
      "sys_id": "123213217",
      "opened_at": "2024-03-14 23:05:32",
      "description": "Id: storage \n time: 2024-04-11 09:54:48 \n Environment: armyts \n Site: Mamram \n Project: office \n Hostname: Myserver \n Message: File corruption \n Severity: Warning \n Description: Restored from backup"
    },
    {
      "number": "inc23218",
      "sys_id": "123213218",
      "opened_at": "2024-03-14 23:06:32",
      "description": "Id: system \n time: 2024-04-11 09:54:48 \n Environment: armyts \n Site: Mamram \n Project: sharepoint \n Hostname: Myserver \n Message: Server downtime \n Severity: Warning \n Description: Issue resolved after server restart"
    },
    {
      "number": "inc23219",
      "sys_id": "123213219",
      "opened_at": "2024-03-14 23:07:32",
      "description": "Id: network \n time: 2024-04-11 09:54:48 \n Environment: armyts \n Site: Mamram \n Project: office \n Hostname: Myserver \n Message: Slow internet connection \n Severity: Warning \n Description: Contacted ISP to resolve bandwidth issue"
    }
  ]};
  
const processActiveIncidents = (req,res) =>{

    // Will make HTTP request and work on the response
    const cache = req.cache;
    const incidentData = extractData(dummyData);
    const incidetWithNotes = checkWithPastIncidents(incidentData,cache);
    // return incidetWithNotes;
    res.json(incidetWithNotes);

}

const checkWithPastIncidents = (data,cache) =>{
    const processedData = data.map(item =>{
        const key = `${item.description.id}:${item.description.project}:${item.description.message}`;
        let foundObject = cache.find(obj=>obj.description === key);
        return {...item,
            closed_notes:foundObject?foundObject.mostUsedNote:''
        };
    });
    return processedData;        
}

// const openIncidentController = (cache) =>{
//     const exposeIncidents = (req,res) => {
//         const incidents = processActiveIncidents(cache);
//         res.status(200).json(incidents);
//     };
//     return {exposeIncidents};
// };
// export default openIncidentController;

export default processActiveIncidents;

