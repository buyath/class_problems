function mark_check(){
    let mark = 95;
    let result = (mark < 35) ? "poor":
            (mark <60) ? "average":
            (mark < 80) ? "good": "excellent";
        console.log(result)
}

mark_check();