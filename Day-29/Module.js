console.log("Module", window.Module);
window.Module = window.Module || (function()
{
    console.log("Module load");
    function internalAPI()
    {
        console.log('Module Method');
    }
    return {
        internalAPI: internalAPI
    }
}())

window.something = 'Something';