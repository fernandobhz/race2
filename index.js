function xyz() {
    console.log(new Date());

    // this will not be fired with 200ms
    setTimeout(() => {
        console.log(new Date());
    }, 200);

    [...Array(1e8).keys()].map(function() {})
}

xyz()
