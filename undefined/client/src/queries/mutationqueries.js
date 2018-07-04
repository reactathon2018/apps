const mutationQuery ={
    addUser : function(userDetails)
    {
        return  `mutation { 
                    addUser(name: "${userDetails.name}", email: "${userDetails.email}", password: "${userDetails.password}", role: "${userDetails.role}")
                    { 
                        name
                        email
                        role 
                    } 
                }`;
    },
    removeUser : function(userDetails)
    {
        return  `mutation { 
                    removeUser(id: ${userDetails.id})
                    { 
                        name
                    } 
                }`;
    },
    updateUser : function(userDetails)
    {
        return  `mutation { 
                    updateUser(id: ${userDetails.id}, name: ${userDetails.name})
                    { 
                        name
                    } 
                }`;
    },
    addHackathon : function(hackDetails)
    {
        return `mutation { 
            addHackathon(name: ${hackDetails.name}, startDate: ${hackDetails.startDate}, endDate: ${hackDetails.endDate}, problem: ${hackDetails.problemStatement})
            { 
                name
            } 
        }`
    },
    addTeam : function(teamDetails)
    {
        return `mutation { 
            addTeam(name: ${teamDetails.name}, users: ${teamDetails.users})
            { 
                name
            } 
        }`
    },
    updateTeam : function(teamDetails)
    {
        return `mutation { 
            updateTeam(id: ${teamDetails.id}, name: ${teamDetails.name}, users: ${teamDetails.users})
            { 
                name
            } 
        }`
    },
    addDiscussion : function(discussion)
    {
        return `mutation{
            addDiscussion(question: ${discussion.question},user_id: ${discussion.user})
            {
                question
            }
        }`
    },
    updateDiscussion : function(discussion)
    {
        return `mutation{
            updateDiscussion(id: ${discussion.id},question: ${discussion.question})
            {
                question
            }
        }`
    },
    removeDiscussion : function(discussion)
    {
        return `mutation{
            removeDiscussion(id: ${discussion.id})
            {
                question
            }
        }`
    },
    addSolution : function(solution)
    {
        return `mutation{
            addSolution(solution: ${solution.solution}, team_id: ${solution.team}, hackathon_id: ${solution.hackathon})
            {
                solution  
            }
        }`
    },
    updateSolution : function(solution)
    {
        return `mutation{
            updateSolution(id: ${solution.id}, solution: ${solution.solution})
            {
                solution  
            }
        }`
    },
    removeSolution : function(solution)
    {
        return `mutation{
            removeSolution(id: ${solution.id})
            {
                solution  
            }
        }`
    }
};

export default mutationQuery;