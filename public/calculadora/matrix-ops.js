const MatrixOps = (function() {
  function add(a, b) {
    const n = a.length;
    const result = [];
    for (let i = 0; i < n; i++) {
      result[i] = [];
      for (let j = 0; j < n; j++) {
        result[i][j] = a[i][j] + b[i][j];
      }
    }
    return result;
  }

  function subtract(a, b) {
    const n = a.length;
    const result = [];
    for (let i = 0; i < n; i++) {
      result[i] = [];
      for (let j = 0; j < n; j++) {
        result[i][j] = a[i][j] - b[i][j];
      }
    }
    return result;
  }

  function multiply(a, b) {
    const n = a.length;
    const result = [];
    for (let i = 0; i < n; i++) {
      result[i] = [];
      for (let j = 0; j < n; j++) {
        let sum = 0;
        for (let k = 0; k < n; k++) {
          sum += a[i][k] * b[k][j];
        }
        result[i][j] = sum;
      }
    }
    return result;
  }

  function multiplyStep(a, b, row, col) {
    const n = a.length;
    let sum = 0;
    const steps = [];
    for (let k = 0; k < n; k++) {
      const product = a[row][k] * b[k][col];
      steps.push({ a: a[row][k], b: b[k][col], product });
      sum += product;
    }
    return { sum, steps };
  }

  function determinant(matrix) {
    const n = matrix.length;
    if (n === 1) return matrix[0][0];
    if (n === 2) return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

    let det = 0;
    for (let j = 0; j < n; j++) {
      const minor = getMinor(matrix, 0, j);
      const sign = j % 2 === 0 ? 1 : -1;
      det += sign * matrix[0][j] * determinant(minor);
    }
    return det;
  }

  function determinantSteps(matrix) {
    const n = matrix.length;
    const steps = [];

    if (n === 1) {
      steps.push(`det(A) = ${matrix[0][0]}`);
      return { value: matrix[0][0], steps };
    }

    if (n === 2) {
      const a = matrix[0][0], b = matrix[0][1];
      const c = matrix[1][0], d = matrix[1][1];
      steps.push(`det(A) = (${a})(${d}) - (${b})(${c})`);
      steps.push(`= ${a*d} - ${b*c}`);
      steps.push(`= ${a*d - b*c}`);
      return { value: a*d - b*c, steps };
    }

    let det = 0;
    let expr = 'det(A) = ';
    const terms = [];
    for (let j = 0; j < n; j++) {
      const minor = getMinor(matrix, 0, j);
      const sign = j % 2 === 0 ? 1 : -1;
      const minorDet = determinant(minor);
      const term = sign * matrix[0][j] * minorDet;
      det += term;
      terms.push(`${sign > 0 ? '+' : '-'}${matrix[0][j]}·(${minorDet})`);
    }
    steps.push(expr + terms.join(' '));
    steps.push(`= ${det}`);
    return { value: det, steps };
  }

  function getMinor(matrix, row, col) {
    const n = matrix.length;
    const minor = [];
    for (let i = 0; i < n; i++) {
      if (i === row) continue;
      const newRow = [];
      for (let j = 0; j < n; j++) {
        if (j === col) continue;
        newRow.push(matrix[i][j]);
      }
      minor.push(newRow);
    }
    return minor;
  }

  function inverse(matrix) {
    const n = matrix.length;
    const det = determinant(matrix);
    if (Math.abs(det) < 1e-10) return null;

    if (n === 1) return [[1 / matrix[0][0]]];

    const adjugate = [];
    for (let i = 0; i < n; i++) {
      adjugate[i] = [];
      for (let j = 0; j < n; j++) {
        const minor = getMinor(matrix, i, j);
        const sign = (i + j) % 2 === 0 ? 1 : -1;
        adjugate[i][j] = sign * determinant(minor);
      }
    }

    const result = [];
    for (let i = 0; i < n; i++) {
      result[i] = [];
      for (let j = 0; j < n; j++) {
        result[i][j] = adjugate[j][i] / det;
      }
    }
    return result;
  }

  function inverseSteps(matrix) {
    const det = determinant(matrix);
    const steps = [];

    if (Math.abs(det) < 1e-10) {
      steps.push('det(A) = 0 → La matriz no tiene inversa');
      return { value: null, steps };
    }

    steps.push(`det(A) = ${det}`);
    steps.push('A⁻¹ = (1/det) · adj(A)');
    steps.push('Calculando matriz adjunta...');

    const result = inverse(matrix);
    steps.push('Inversa calculada');
    return { value: result, steps };
  }

  function trace(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
      sum += matrix[i][i];
    }
    return sum;
  }

  function addStep(a, b, row, col) {
    const valA = a[row][col];
    const valB = b[row][col];
    return { result: valA + valB, text: `${valA} + ${valB}` };
  }

  function subtractStep(a, b, row, col) {
    const valA = a[row][col];
    const valB = b[row][col];
    return { result: valA - valB, text: `${valA} − ${valB}` };
  }

  function traceSteps(matrix) {
    const steps = [];
    const terms = [];
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
      terms.push(`${matrix[i][i]}`);
      sum += matrix[i][i];
    }
    steps.push(`tr(A) = ${terms.join(' + ')}`);
    steps.push(`= ${sum}`);
    return { value: sum, steps };
  }

  function gaussJordanSteps(matrix) {
    const n = matrix.length;
    const detValue = roundSmart(determinant(matrix));
    const aug = [];
    for (let i = 0; i < n; i++) {
      aug[i] = [];
      for (let j = 0; j < n; j++) aug[i][j] = matrix[i][j];
      for (let j = 0; j < n; j++) aug[i][n + j] = (i === j) ? 1 : 0;
    }

    const steps = [];
    steps.push({ label: 'Matriz ampliada [A|I]', type: 'init', highlightRow: -1, pivot: null, augMatrix: aug.map(r => [...r]) });

    if (Math.abs(detValue) < 1e-10) {
      steps.push({ label: `det(A) = 0 → La matriz no tiene inversa`, type: 'error', highlightRow: -1, pivot: null, augMatrix: aug.map(r => [...r]) });
      return steps;
    }

    for (let col = 0; col < n; col++) {
      let pivotRow = -1;
      for (let r = col; r < n; r++) {
        if (Math.abs(aug[r][col]) > 1e-10) { pivotRow = r; break; }
      }

      if (pivotRow === -1) {
        steps.push({ label: `det(A) = 0 → La matriz no tiene inversa`, type: 'error', highlightRow: -1, pivot: null, augMatrix: aug.map(r => [...r]) });
        return steps;
      }

      if (pivotRow !== col) {
        const temp = aug[col];
        aug[col] = aug[pivotRow];
        aug[pivotRow] = temp;
        const r1 = col + 1, r2 = pivotRow + 1;
        steps.push({ label: `F${r1} ↔ F${r2}`, type: 'swap', highlightRow: col, pivot: [col, col], augMatrix: aug.map(r => [...r]) });
      }

      const pivotVal = aug[col][col];
      if (Math.abs(pivotVal - 1) > 1e-10) {
        for (let j = 0; j < 2 * n; j++) aug[col][j] /= pivotVal;
        const r = col + 1;
        const frac = formatFrac(1, pivotVal);
        steps.push({ label: `F${r} = (${frac})·F${r}`, type: 'scale', highlightRow: col, pivot: [col, col], augMatrix: aug.map(r => [...r]) });
      }

      for (let r = 0; r < n; r++) {
        if (r === col) continue;
        const factor = aug[r][col];
        if (Math.abs(factor) < 1e-10) continue;
        for (let j = 0; j < 2 * n; j++) aug[r][j] -= factor * aug[col][j];
        const ri = r + 1, ci = col + 1;
        const sign = factor > 0 ? '-' : '+';
        const absF = Math.abs(factor);
        const factorStr = absF === 1 ? '' : formatFrac(absF, 1);
        steps.push({ label: `F${ri} = F${ri} ${sign} ${factorStr}·F${ci}`, type: 'eliminate', highlightRow: r, pivot: [col, col], augMatrix: aug.map(r => [...r]) });
      }
    }

    const result = [];
    for (let i = 0; i < n; i++) {
      result[i] = [];
      for (let j = 0; j < n; j++) result[i][j] = aug[i][n + j];
    }
    steps.push({ label: 'A⁻¹ calculada', type: 'done', highlightRow: -1, pivot: null, augMatrix: aug.map(r => [...r]), result });
    return steps;
  }

  function det2x2(m) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  }

  function formatFrac(num, den) {
    if (den === 1) return String(num);
    const gcd = GCD(Math.abs(Math.round(num * 1000)), Math.abs(Math.round(den * 1000)));
    const n = Math.round(num * 1000) / gcd;
    const d = Math.round(den * 1000) / gcd;
    if (d === 1) return String(n);
    return `${n}/${d}`;
  }

  function GCD(a, b) { return b === 0 ? a : GCD(b, a % b); }

  function roundSmart(v) {
    if (Math.abs(v) < 1e-6) return 0;
    if (Math.abs(v - 1) < 1e-6) return 1;
    if (Math.abs(v + 1) < 1e-6) return -1;
    if (Math.abs(v - Math.round(v)) < 1e-6) return Math.round(v);
    return Math.round(v * 1000) / 1000;
  }

  return {
    add,
    subtract,
    addStep,
    subtractStep,
    multiply,
    multiplyStep,
    determinant,
    determinantSteps,
    inverse,
    inverseSteps,
    trace,
    traceSteps,
    gaussJordanSteps,
    roundSmart
  };
})();
