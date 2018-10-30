let foo = 'bar'

if (true) {
    let foo = 'baz'

    if(true) {
        foo = 'foobar'
        console.log(foo)
    }
}

if (true) {
    console.log(foo)
}