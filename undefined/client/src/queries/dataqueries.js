const dataQuery ={
    getUsers : function()
    {
        return  `query {
            users{
                name
                email
                role
            }
        }`;
    },
    getUser : function(name)
    {
        return  `query {
            user(name: ${name}){
                name
                email
                role
            }
        }`;
    },
    getSolutions : function()
    {
        return `query{
        solutions{
            solution               
        }
    }`;
    },
    getDiscussion : function()
    {
        return `query{
        discussions{
            question               
        }
    }`;
    },
    getVotes : function()
    {
        return `query{
        votes{
            question               
        }
    }`;
    },
    getHackathons : function()
    {
        return `query{
        hackathons{
            name
            id
            startDate
            endDate
            problem               
        }
    }`;
    },
    getHackathon : function(hackathon)
    {
        return `query{
        hackathon(id : ${hackathon}){
            name
            id
            startDate
            endDate
            problem               
        }
    }`;
    },
    getTeams : function()
    {
        return `query{
        teams{
            name               
        }
    }`;
    },
    doAuthenticate : function(userDetail)
    {
        console.log(userDetail);
        return `query{
            authenticate(email: "${userDetail.email}", password: "${userDetail.password}")
            {
                name
                email
                role
                badges
                score
            }
        }`
    }
};

export default dataQuery;