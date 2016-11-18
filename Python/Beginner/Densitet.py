print("Detta program räknar ut densiteten")

massa = input("Skriv hur mycket massa materian har i gram:")
massa = float(massa)

le = input("Skriv längden på materian i cm:")
le = float(le)

be = input("Skriv bredden på materian i cm:")
be = float(be)

he = input("Skriv höjden på materian i cm:")
he = float(he)

volym = le * be * he
print("Volymen är:",volym)
volym = float(volym)


densitet = massa / volym
print("Densiteten är:",densitet)
