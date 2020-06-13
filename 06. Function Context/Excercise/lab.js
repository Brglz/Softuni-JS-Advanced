//EXCERCISE 1

/*class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, possition, department) {
        this._validateParam(username);
        this._validateParam(salary);
        this._validateParam(possition);
        this._validateParam(department);

        if (salary < 0) {
            throw new Error('Invalid input!');
        }
        let current = this.departments.find(d => d.name === department)

        if (current === undefined) {
            current = {
                name: department,
                employees: []
            };
            this.departments.push(current);
        }
        current.employees.push({
            username,
            salary,
            possition
        });
        return `New employee is hired. Name: ${username}. Position: ${possition}`;
    }


    bestDepartment() {
        const departments = this.departments.map(d => {
            const dep = Object.assign({}, d);
            dep.avarageSalary = d.employees.reduce((p, c, i, a) => p + c.salary, 0) / d.employees.length;
            return dep;
        });

        departments.sort((a,b)=> b.avarageSalary - a.avarageSalary);
        const best = departments[0];
        if(best!==undefined){
            best.employees.sort((a,b) => b.salary - a.salary || a.username.localeCompare(b.username))
        }
        const result = [
            `Best Department is: ${best.name}`,
            `Average salary: ${best.avarageSalary.toFixed(2)}`
        ]
        best.employees.forEach(e => result.push(`${e.username} ${e.salary} ${e.possition}`))
        return result.join('\n')

    }

    _validateParam(param) {
        if (param === '' || param === undefined || param === null) {
            throw new Error('Invalid input!')
        }
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

'New employee is hired. Name Stanimir. Position: engineer.'
'New employee is hired. Name: Stanimir. Position: engineer'*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 2

/*function getFibonator() {
    let current = 0;
    let previous = 0;

    return () => {  
        if(current === 0){
            previous=1;
        }
        let newNumber = previous + current;
        previous = current;
        current = newNumber;
        return current;
    }
}*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 3





