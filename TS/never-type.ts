function fail(msg : string):never{
    throw new Error(msg);
}


fail("Hey Dude");