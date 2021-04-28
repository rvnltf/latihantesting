const {averageExams, isStudentPassExam} = require('../gradeCalculations');

describe('grade calculations', () => {
    test('it should return exact average', () => {
        const listValueOfExams = [80, 'a', 100, 80];
        expect(averageExams(listValueOfExams)).toEqual(90);
    });

    
    test('it should return exam passed status', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(true);
    })

    test('it should return exam failed status', () => {
        const listValueOfExams = [50, 40, 70, 80];
        expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(false);
    })
})
// describe('pengujian olah aritmatika', () => {
//     test('#1 dua tambah dua adalah empat', ()=>{
//         expect(2+2).toBe(4);
//     })
//     test('#2 dua tambah tiga adalah enam', ()=>{
//         expect(2*3).toBe(6);
//     })
// })