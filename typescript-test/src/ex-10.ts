// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng

// 1. Ge ett exempel på en funktion med en generiskt typ.
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;

// 2. Ge ett exempel på en funktion med två generiska typer.
public class BinarySearchComparers:IComparer<KeyValuePair<int, string>>, IComparer<KeyValuePair<int, byte>>
  {
    public int Compare(KeyValuePair<int, string> x, KeyValuePair<int, string> y)
    {
      return x.Key.CompareTo(y.Key); 
    }
    public int Compare(KeyValuePair<int, byte> x, KeyValuePair<int, byte> y)
    {
      return x.Key.CompareTo(y.Key);
    }
  }
// 3. Ge ett exempel på ett interface med en generisk typ.
interface KeyPair<T, U> {
    key: T;
    value: U;
}

let kv1: KeyPair<number, string> = { key:1, value:"Steve" }; // OK
let kv2: KeyPair<number, number> = { key:1, value:12345 }; // OK