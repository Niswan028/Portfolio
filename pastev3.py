import pyautogui as A, keyboard as B, time as C, random as D
import platform
def F():
    def G(H):
        if H.isalpha():
            return D.uniform(0.05, 0.15)
        elif H.isdigit():
            return D.uniform(0.05, 0.2)
        else:
            return D.uniform(0.1, 0.3)

    def I():
        J = D.uniform(1, 3)
        if D.random() < 0.009:
            J = D.uniform(60, 120)
        C.sleep(J)

    def K():
        C.sleep(D.uniform(0.5, 1.5))

    def L():
        M = D.randrange(1, 4)
        for _ in range(M):
            N = D.choice('abcdefghijklmnopqrstuvwxyz')
            A.typewrite(N)
            C.sleep(G(N))
        for _ in range(M):
            A.press('backspace')

    def R(S):
        T = True
        U = True
        V = S
        try:
            W = 0
            if T:
                V = '\n'.join(list(map(str.strip, V.split('\n'))))
            if U:
                for X in V:
                    W += 1
                    if W % 4 == 0:
                        C.sleep(0.076)
                    if X in [')', ']']:
                        C.sleep(0.008)
                    if X == '}':
                        A.press('down')
                    else:
                        if X == '\n':
                            A.typewrite(X)
                            C.sleep(0.02)
                        else:
                            C.sleep(0.008)
                            A.typewrite(X)
            print("Successfully Power Pasted")
        except A.FailSafeException as Y:
            print("Stopped Power Pasting |", Y)

    Z = 'code.txt'  
    with open(Z, 'r') as aa:
        bb = aa.read()
    cc = bb.split('END\n')

    def dd(ee):
        for ff in range(len(cc)):
            if B.is_pressed(f'alt+{ff+1}'):
                C.sleep(0.5)
                R(cc[ff].strip())

    B.on_press(dd)
    B.wait('esc')

name = platform.node()
if name == 'Ajay-Acer':
    F()
else: 
    print("Contact AJ")