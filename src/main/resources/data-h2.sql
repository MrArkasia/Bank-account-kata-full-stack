INSERT INTO ACCOUNT (ACCOUNT_ID, BALANCE) VALUES
  (1, 274.39),
  (2, 4238.20),
  (3, 784.92),
  (4, 56.45);

INSERT INTO OPERATION (OPERATION_ID, DATE, TYPE, AMOUNT, BALANCE) VALUES
  (1, 1547568086129, 0, 200, 200),
  (2, 1547568086129, 0, 74.39, 274.39),
  (3, 1547568086129, 0, 3000, 3000),
  (4, 1547568086129, 0, 1238.20, 4238.20),
  (5, 1547568086129, 0, 100, 100),
  (6, 1547568086129, 1, 50, 50),
  (7, 1547568086129, 0, 734.92, 784.92),
  (8, 1547568086129, 0, 200, 200),
  (9, 1547568086129, 1, 50, 150),
  (10, 1547568086129, 1, 30, 20),
  (11, 1547568086129, 0, 26.45, 56.45);

INSERT INTO ACCOUNT_HISTORY (ACCOUNT_ACCOUNT_ID, HISTORY_OPERATION_ID) VALUES
  (1, 1),
  (1, 2),
  (2, 3),
  (2, 4),
  (3, 5),
  (3, 6),
  (3, 7),
  (4, 8),
  (4, 9),
  (4, 10),
  (4, 11);