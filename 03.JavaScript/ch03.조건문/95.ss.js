if (A == B && B == C) cout << 10000 + A * 1000;
    else if (A == B || B == C) cout << 1000 + B * 100;
    else if (C == A) cout << 1000 + C * 100;
    else {
        if (A > B && A > C) cout << A * 100;
        else if (B > A && B > C) cout << B * 100;
        else cout << C * 100;
    }