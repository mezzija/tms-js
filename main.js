const studentsData = [
    {
        firstName: 'Василий',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Java',
    },
    {
        firstName: 'Иван',
        lastName: 'Иванов',
        admissionYear: 2018,
        courseName: 'JavaScript',
    },
    {
        firstName: 'Александр',
        lastName: 'Федоров',
        admissionYear: 2017,
        courseName: 'Python',
    },
    {
        firstName: 'Николай',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Android',
    }
];

class User{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

class Student extends User{
    constructor(admissionYear ,courseName ,...args){
        super(...args);
        this.admissionYear=admissionYear;
        this.courseName=courseName;
    }
    get nameCourse(){
        return this.courseName;
    }
    get course(){
        let data=new Date();
        return data.getFullYear()-this.admissionYear;
    }
}

class Students {
    constructor(studentsData){
        this.studentsData=studentsData;
    }
    getInfo(){
        let students=[] ;
        this.studentsData.sort((a,b)=>{
            if(a.admissionYear<b.admissionYear) return 1;
            if(a.admissionYear>b.admissionYear) return -1;
        });
        for (let i=0;i<this.studentsData.length;i++){
            let student= new Student(this.studentsData[i].admissionYear,this.studentsData[i].courseName,this.studentsData[i].firstName,this.studentsData[i].lastName);

            students.push(`${student.fullName}-${student.nameCourse},${student.course} курс`);
        }
        return students;
    }
}

const students = new Students(studentsData);
console.log(students.getInfo());

