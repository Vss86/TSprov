// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng
// 1. Ge ett exempel på en funktion med en generiskt typ.
function identity(arg) {
    return arg;
}
var myIdentity = identity;
// 2. Ge ett exempel på en funktion med två generiska typer.
var BinarySearchComparers = /** @class */ (function () {
    function BinarySearchComparers() {
    }
    return BinarySearchComparers;
}());
(IComparer), (IComparer);
{
    int;
    Compare(KeyValuePair < int, string > x, KeyValuePair < int, string > y);
    {
        return x.Key.CompareTo(y.Key);
    }
    int;
    Compare(KeyValuePair < int, byte > x, KeyValuePair < int, byte > y);
    {
        return x.Key.CompareTo(y.Key);
    }
}
var kv1 = { key: 1, value: "Steve" }; // OK
var kv2 = { key: 1, value: 12345 }; // OK
