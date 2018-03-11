import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
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
    }
});
