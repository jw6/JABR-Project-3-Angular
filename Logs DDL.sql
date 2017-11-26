CREATE SEQUENCE log_seq START WITH 1 INCREMENT BY 1;


create or replace TRIGGER log_seq_trg
BEFORE INSERT ON logs
FOR EACH ROW
BEGIN
IF :new.L_ID IS NULL THEN
  SELECT log_seq.NEXTVAL INTO :new.L_ID FROM dual;
END IF;
END;
