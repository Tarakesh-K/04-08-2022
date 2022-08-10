let span = document.getElementById("span");
span.innerHTML="10";

let count = 10;
setTimeout(()=>{
    count = count-1;
    span.innerHTML = count;
    setTimeout(()=>{
        count = count-1;
        span.innerHTML = count;
        setTimeout(()=>{
            count = count-1;
            span.innerHTML = count;
            setTimeout(()=>{
                count = count-1;
                span.innerHTML = count;
                setTimeout(()=>{
                    count = count-1;
                    span.innerHTML = count;
                    setTimeout(()=>{
                        count = count-1;
                        span.innerHTML = count;
                        setTimeout(()=>{
                            count = count-1;
                            span.innerHTML = count;
                            setTimeout(()=>{
                                count = count-1;
                                span.innerHTML = count;
                                setTimeout(()=>{
                                    count = count-1;
                                    span.innerHTML = count;
                                    setTimeout(()=>{
                                        span.innerHTML="Happy Independence day";
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000);