/** Square:
 *
 * State: none
 *
 * Props:
 * - value
 * - onSquareClick ()
 *
 * Board -> Square
 */
function Square({ value, onSquareClick }) {

  return (
    <button
      className="square"
      onClick={onSquareClick}
    >{value}</button>
  );
}

export default Square;