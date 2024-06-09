function extractData(data) {
    return data.result.map(item => {
        const { number, sys_id, opened_at, description } = item;
        
        const descriptionLines = description.split('\n').map(line => line.trim());

        const descriptionData = descriptionLines.reduce((acc, line) => {
            const [key, value] = line.split(':').map(part => part.trim());
            switch (key.toLowerCase()) {
                case 'id':
                    acc.id = value;
                    break;
                case 'time':
                    acc.time = value;
                    break;
                case 'project':
                    acc.project = value;
                    break;
                case 'message':
                    acc.message = value;
                    break;
                case 'description':
                    acc.description = value;
                    break;
            }
            return acc;
        }, {});

        return {
            number,
            sys_id,
            opened_at,
            description :{id: descriptionData.id,
            project: descriptionData.project,
            time: descriptionData.time,
            message: descriptionData.message,
            description: descriptionData.description}
        };
    });
}

export {extractData};
