import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        var peopleList = {
            people: [
                {
                    id: 'christian',
                    name: 'Christian',
                    isFemale: false,
                    salary: 3000000,
                }, {
                    id: 'melissa',
                    name: 'Melissa',
                    isFemale: true,
                    salary: 4500000
                },{
                    id: 'juan',
                    name: 'Juan',
                    isFemale: false,
                    salary: 9000000,
                }, {
                    id: 'daniel',
                    name: 'Daniel',
                    isFemale: false,
                    salary: 12000000,
                },{
                    id: 'karol',
                    name: 'Karol',
                    isFemale: true,
                    salary: 800000,
                },{
                    id: 'sandra',
                    name: 'Sandra',
                    isFemale: true,
                    salary: 15000000,
                }
            ],
        };

        var totalSalary = 0;
        for(var i = 0; i < peopleList.people.length; i++) {
          totalSalary += peopleList.people[i].salary;
        }

        return {people: peopleList.people, total: totalSalary};
    }
});
