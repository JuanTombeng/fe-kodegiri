const soal1 = (min, max) => {
    for (let i = min; i <= max; i++) {
        if (i % 5 == 0) {
            if (i <= 60) {
                console.log("KURANG");
            } else if (i > 60 && i <= 70) {
                console.log("CUKUP");
            } else if (i > 70 && i <= 80) {
                console.log("BAIK");
            } else {
                console.log("LUAR BIASA");
            }
            console.log(i);
        }
    }
}

soal1(50, 100)